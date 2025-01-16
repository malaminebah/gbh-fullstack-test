"use client";

import { Vehicle } from "../types/vehicule.types";
import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface VehiculeModalProps {
  vehicule: Vehicle;
  isOpen: boolean;
  onClose: () => void;
}

export const VehiculeModal = ({
  vehicule,
  isOpen,
  onClose,
}: VehiculeModalProps) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        {/* Fond sombre */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        </Transition.Child>

        {/* Modal */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="mx-auto max-w-3xl w-full bg-white rounded-xl shadow-xl overflow-hidden">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>

              <div className="relative h-64 sm:h-72 md:h-96 w-full">
                <Image
                  src={vehicule.images[0] || "/images/placeholder.jpg"}
                  alt={`${vehicule.manufacturer} ${vehicule.model}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <Dialog.Title className="text-2xl font-bold">
                      {vehicule.manufacturer} {vehicule.model}
                    </Dialog.Title>
                    <p className="text-gray-600">{vehicule.year}</p>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    {vehicule.price.toLocaleString("fr-FR")} €
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                    {vehicule.type}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">
                    {vehicule.fuelType}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full">
                    {vehicule.transmission}
                  </span>
                </div>

                <p className="text-gray-600 mb-6">{vehicule.description}</p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">
                    Caractéristiques
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {vehicule.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                  {vehicule.mileage !== undefined && (
                    <div>
                      <span className="text-gray-500">Kilométrage:</span>
                      <p>{vehicule.mileage.toLocaleString("fr-FR")} km</p>
                    </div>
                  )}
                  <div>
                    <span className="text-gray-500">Mise en circulation:</span>
                    <p>
                      {new Date(vehicule.createdAt).toLocaleDateString("fr-FR")}
                    </p>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
