const TemplateList = ({ products, name }) => {
  return (
    <div>
      <div className="px-10 overflow-y-auto custom-scrollbar h-[600px] max-h-[600px] bg-white rounded-xl">
        <h1 className="my-8 text-2xl tracking-tight text-red-700 text-center font-bold">
        <span className="border-b-4 pb-1 border-red-700">{name}</span>
        </h1>
        {products.map(({ name, description, price }, index) => (
          <div key={index} className="mt-3">
            <dl>
              <div className="py-3">
                <dt className="text-base font-medium mb-1 leading-6 text-gray-900">
                  {name}
                </dt>
                <dd className="mt-1 flex text-sm leading-6 text-gray-700">
                  <span className="flex-grow font-light">{description}</span>
                  <span className="ml-6 flex-shrink-0">
                    <p className="font-medium">{price}</p>
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateList;
